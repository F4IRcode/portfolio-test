const MetaBalls = () => {
  return (
    <div className="metaballs">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10
              "
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        <circle className="metaball" cx="40" cy="40" r="40" />
        <circle className="metaball" cx="80" cy="80" r="40" style={{ animationDelay: "2s" }} />
        <circle className="metaball" cx="120" cy="40" r="40" style={{ animationDelay: "4s" }} />
      </svg>
    </div>
  );
};

export default MetaBalls;
