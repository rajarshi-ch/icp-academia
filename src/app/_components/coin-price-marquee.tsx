"use client";
import { useEffect } from "react";

const CoinPriceMarquee = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

//   return (
//     <div
//       className="gecko-coin-price-marquee-widget"
//       data-locale="en"
//       data-outlined="true"
//       data-coin-ids=""
//       data-initial-currency="usd"
//     ></div>
//   );
    return (
      <div>
        <gecko-coin-price-marquee-widget locale="en" outlined="true" coin-ids="" initial-currency="usd"></gecko-coin-price-marquee-widget>
      </div>
    );
};

export default CoinPriceMarquee;
