pipeline {
    agent any

    environment {
        IMAGE_NAME = 'portfolio-fe'
        IMAGE_TAG = 'latest'
        REGISTRY_CREDENTIALS = 'docker-hub-id' // Usa le credenziali Jenkins per Docker Hub
        DOCKER_USERNAME = 'christian96k' // Nome utente Docker Hub
        FULL_IMAGE_NAME = "${DOCKER_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}" // Non è necessario specificare docker.io
    }

    stages {

        // Stage 1: Pull del progetto e build dell'immagine dal Dockerfile
        stage('Build Image from Dockerfile') {
            steps {
                script {
                    def dockerVersion = sh(script: 'docker --version', returnStdout: true).trim()
                    echo "Docker Version: ${dockerVersion}"

                    // Costruisci immagine con tag completo (prefisso compreso)
                    sh "docker build -t ${FULL_IMAGE_NAME} ."
                }
            }
        }

        // Stage 2: Login su Docker Hub e push dell'immagine
        stage('Login & Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: REGISTRY_CREDENTIALS, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin"
                    }

                    // Push direttamente, senza fare docker tag
                    sh "docker push ${FULL_IMAGE_NAME}"
                }
            }
        }

        // Stage 3: Deploy dell'immagine sulla VM tramite Docker Compose
        stage('Deploy on Local VM via Docker Compose') {
            steps {
                script {
                    sh """
                        cd /dockerfiles &&
                        docker-compose up -d
                    """
                }
            }
        }

        // Stage 4: Remove All Local unused Images
        stage('Remove Local untagged local Images') {
            steps {
                script {
                    sh '''
                        # Rimuovi tutte le immagini con nome specifico tranne la latest
                        docker images "${IMAGE_NAME}" --format "{{.ID}} {{.Tag}}" | \
                        grep -v "latest" | awk '{print $1}' | xargs -r docker rmi || true

                        # Rimuovi tutte le immagini dangling (senza tag)
                        docker images -f "dangling=true" -q | xargs -r docker rmi || true
                    '''
                }
            }
        }

        // Stage 5: Clean Docker Build Cache if >1GB
        stage('Clean Docker Build Cache if >1GB') {
            steps {
                script {
                    sh '''
                        cache_size=$(docker system df | grep "Build Cache" | tr -s ' ' | cut -d' ' -f5)
                        echo "Build cache size: $cache_size"

                        num=$(echo $cache_size | grep -o -E '[0-9.]+')
                        unit=$(echo $cache_size | grep -o -E '[A-Za-z]+')

                        case $unit in
                        GB) size_bytes=$(echo "$num * 1024 * 1024 * 1024" | bc) ;;
                        MB) size_bytes=$(echo "$num * 1024 * 1024" | bc) ;;
                        KB) size_bytes=$(echo "$num * 1024" | bc) ;;
                        B)  size_bytes=$num ;;
                        *)  size_bytes=0 ;;
                        esac

                        threshold=$((1 * 1024 * 1024 * 1024))

                        if [ "$(echo "$size_bytes > $threshold" | bc -l)" = "1" ]; then
                        echo "Build cache supera 1GB, pulisco..."
                        docker builder prune -f
                        else
                        echo "Build cache sotto 1GB, niente pulizia."
                        fi
                    '''
                }
            }
        }




    }

    post {
        always {
            cleanWs() // Pulizia dell'ambiente di lavoro dopo la pipeline
        }
    }
}
