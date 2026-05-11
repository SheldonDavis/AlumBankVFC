export default function HeroImage(params: any) {
  return (
    <>
      <div className={`${params?.h1 && `relative h-64 w-full overflow-hidden`} heroImageContainer z-1`}>
        <img src={params.src} alt={params.alt} className={`${params.h1 && `object-cover h-full w-full`}`} />
        {params?.h1 && (
          <div className={`absolute inset-0 flex items-center justify-center bg-black/40`}>
            <h1 className={`absolute top-[46%]`}>{params.h1}</h1>
          </div>
        )}
      </div>
    </>
  );
}
