"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ProjectPreviewProps {
  title: string;
  subtitle: string;
  slug: string;
  images: string[];
  position?: "left" | "right" | "center";
  isTop?: boolean;
  isBottom?: boolean;
  className?: string;
}

const ProjectPreview = ({
  title,
  subtitle,
  slug,
  images,
  position = "center",
  isTop = false,
  isBottom = false,
  className = "",
}: ProjectPreviewProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [isHovering, setIsHovering] = useState(true); // 默认设为true，确保始终显示
  
  // 文字分割效果
  useEffect(() => {
    const splitText = (element: HTMLElement | null, className: string) => {
      if (!element) return;
      
      const text = element.textContent || "";
      element.innerHTML = "";
      
      [...text].forEach((char, index) => {
        if (char === " " || char === "\n") {
          element.appendChild(document.createTextNode(" "));
          return;
        }
        
        const span = document.createElement("span");
        span.textContent = char;
        span.className = className;
        span.style.setProperty("--char-index", index.toString());
        element.appendChild(span);
      });
    };

    // 分割文字为单个字符，用于动画效果
    splitText(titleRef.current, "split-char");
    splitText(subtitleRef.current, "split-char");
  }, []);

  // 鼠标悬停和离开处理
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    // 不关闭hover状态，保持显示
    // setIsHovering(false);
  };

  // 获取第一张图片
  const imageUrl = images[0] || `https://via.placeholder.com/480x480?text=${title}`;

  return (
    <div className={`preview__box ${className}`}>
      <Link 
        href={`/works/${slug}`}
        className={`preview-item ${isHovering ? 'is-hovering' : ''}`}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative', display: 'block', overflow: 'hidden' }}
      >
        {/* 项目图片背景 - 单一图片 */}
        <div className="preview-item__bg" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={imageUrl}
            alt={title}
            className="preview-item__cover"
            loading="eager"
            style={{
              opacity: 1,
              zIndex: 5,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />

          {/* 图片遮罩 */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 70%)',
              opacity: 0.9,
              borderRadius: '4px',
            }}
          ></div>
        </div>
        
        {/* 项目类型标签 */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            backgroundColor: 'rgba(255,255,255,0.9)',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: 500,
            color: '#000',
            zIndex: 30,
            opacity: 1,
          }}
        >
          <span>{subtitle}</span>
        </div>

        {/* 查看项目按钮 */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            opacity: 1,
          }}
        >
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'white',
            marginRight: '0.5rem',
          }}>查看项目</span>
          <div style={{
            backgroundColor: 'white',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        {/* 项目信息 */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '2rem',
            zIndex: 30,
            color: 'white',
            opacity: 1,
          }}
        >
          <div style={{ transform: 'none' }}>
            <h3 
              ref={titleRef} 
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.25rem',
                color: 'white',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              {title}
            </h3>
            <p 
              ref={subtitleRef}
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {" " + subtitle}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectPreview;