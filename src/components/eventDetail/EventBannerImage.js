import Image from 'next/image'

const EventBannerImage = ({ image, altText }) => {
    return (
        <section className="relative md:py-80 py-32">
            <div className="absolute inset-0">
                <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt={altText}
                />
            </div>
        </section>
    )
}

export default EventBannerImage
