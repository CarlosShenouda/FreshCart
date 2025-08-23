import styles from "./Loading.module.css";

export default function Loading () {
  return (
    <div className="text-center bg-transparent w-full text-primary-600 col-span-full">
      <svg
        className="block mx-auto mb-6 w-32 h-32"
        role="img"
        aria-label="Shopping cart line animation"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
          {/* Track */}
          <g className="stroke-gray-300/30">
            <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
            <circle cx="43" cy="111" r="13" />
            <circle cx="102" cy="111" r="13" />
          </g>

          {/* Animated lines */}
          <g className="stroke-current">
            <polyline
              className={`${styles.cartLines} ${styles.cartTop}`}
              points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
              strokeDasharray="338 338"
              strokeDashoffset="-338"
            />
            <g className={styles.cartWheel1}>
              <circle
                className={styles.cartWheelStroke}
                cx="43"
                cy="111"
                r="13"
                strokeDasharray="81.68 81.68"
                strokeDashoffset="81.68"
              />
            </g>
            <g className={styles.cartWheel2}>
              <circle
                className={styles.cartWheelStroke}
                cx="102"
                cy="111"
                r="13"
                strokeDasharray="81.68 81.68"
                strokeDashoffset="81.68"
              />
            </g>
          </g>
        </g>
      </svg>
      <div className="relative h-[1.5em]">
        <p className="absolute inset-0 animate-pulse text-sm">Bringing you the goods…</p>
      </div>
    </div>
  );
};

