'use client'

// Image assets from Figma
const imgNielsenNormanGroupLogo1 = "/assets/nng-logo.png";

export default function CertificationSection() {
  return (
    <div className="bg-[#f7f7f9] box-border flex flex-col gap-4 items-center justify-center p-[32px] relative rounded-[32px] h-full min-h-[250px]">
      <div 
        className="bg-center bg-cover bg-no-repeat h-[71px] shrink-0 w-[150px]" 
        style={{ backgroundImage: `url('${imgNielsenNormanGroupLogo1}')` }} 
      />
      
      <div className="font-graphik font-medium leading-[0] not-italic relative shrink-0 text-[18px] text-black text-nowrap tracking-[-0.27px]">
        <p className="leading-[26px] whitespace-pre">Certified</p>
      </div>
    </div>
  )
}
