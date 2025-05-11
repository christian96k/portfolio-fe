import React from "react";
import { gsap } from "gsap";

import "./FlowingMenu.scss";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
  children: MenuItemProps[];
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image, children }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults: gsap.TweenVars = { duration: 0.6, ease: "expo" };

  const distMetric = (x: number, y: number, x2: number, y2: number): number => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0).to(
      marqueeInnerRef.current,
      { y: edge === "top" ? "101%" : "-101%" },
      0
    );
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        {/* <span>{text}</span> */}
        <div className="children d-flex gap-5">
            { children.map((child, index) => (
                <div key={index} className="children__item text-center mx-3">
                    <img className="img-fluid" height={55}  width={70} src={child.image} alt="" />
                    <span className="font-size-12">{child.text}</span>
                </div>
            ))}
        </div>
               
        {/* <div
          className="marquee__img rounded-3"
          style={{ backgroundImage: `url(${image})` }}
        /> */}
      </React.Fragment>
    ));
  }, [text, image, children]);

  return (
    <div className="menu__item backdrop-filter-10 d-flex justify-content-center" ref={itemRef}>
        <a
            className="menu__item-link w-100 d-flex flex-column align-items-center justify-content-center"
            href={link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >   
          <div className="menu__item-image-container d-flex align-items-center gap-1 flex-column justify-content-center border-gradient bottom backdrop-blur-10 p-2  px-3 rounded-3">
            <img width={75}  src={image} alt="" />
            <span className="font-size-12">
              {text}
            </span>

          </div>
        </a>

      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
