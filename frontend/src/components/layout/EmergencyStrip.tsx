export default function EmergencyStrip() {
  return (
    <div className="bg-[#b52929] text-white text-center py-2 px-5 text-[12.5px] font-medium relative z-[200]">
      <span>🚑 24/7 Emergency &amp; Trauma Care</span>
      <span className="mx-3 opacity-50">|</span>
      <a href="tel:0821-2331066" className="font-bold text-[#ffd6d6] hover:text-white transition-colors">
        📞 0821-2331066
      </a>
       <span className="mx-3 opacity-50">|</span>
      <a href="tel:0821-2331066" className="font-bold text-[#ffd6d6] hover:text-white transition-colors">
        📞 +91-9606963418
      </a>
      <span className="mx-3 opacity-50">|</span>
      <a href="tel:108" className="font-bold text-[#ffd6d6] hover:text-white transition-colors">
        🚨 Ambulance: 2331066
      </a>
    </div>
  );
}
