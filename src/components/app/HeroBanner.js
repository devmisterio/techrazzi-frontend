const HeroBanner = () => {
    return (
        <>
            <section className="pt-36 pb-24 bg-primary/5">
                <div className="container">
                    <div className="grid grid-cols-1 justify-between items-center gap-6">
                        <div>
                            <h2 className="md:text-5xl/tight text-3xl font-semibold mb-7">
                                Teknolojinin Geleceğini
                                <span className="relative after:bg-amber-400/60 after:h-6 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
                                    &nbsp;TechRazzi&nbsp;
                                </span>
                                Etkinlikleriyle Keşfedin
                            </h2>
                            <p className="text-slate-400 leading-7">
                                En yeni teknoloji etkinliklerini keşfedin ve
                                sektör yenilikçileriyle bağlantı kurun.
                                TechRazzi, teknoloji trendleri ve çığır açan
                                yeniliklere sizi daha yakın getiriyor.
                                Topluluğumuza katılarak her etkinlikle birlikte
                                öğrenin, büyüyün ve etkileşimde bulunun.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner
