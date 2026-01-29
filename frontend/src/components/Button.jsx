export const Button = ({ text, className,href,target="_self" }) => {
  return (
    <a
      target={target}
      href={href}
      className={`${className ?? ""} cta-wrapper`}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      
      <div className="cta-button group">
        <div className="bg-circle"></div>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
