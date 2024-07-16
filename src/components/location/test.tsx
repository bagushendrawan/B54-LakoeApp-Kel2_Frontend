import { Card, CardContent } from "@/components/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/carousel";
import { useState } from "react";

export function CarouselSize() {
    const images = [
        {
            Image: "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Image: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Image: "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600"
        },
    ];

    const [selectedImage, setSelectedImage] = useState(images[0].Image); // Set the first image as default
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

    const selectImage = (image: string) => {
        setSelectedImage(image);
    };

    const triggerSelect = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        selectImage(images[nextIndex].Image);
    };

    const handlePrevious = () => {
        // Logic untuk menggeser carousel item ke kiri
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
        selectImage(images[prevIndex].Image);
    };

    const handleNext = () => {
        // Logic untuk menggeser carousel item ke kanan
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        selectImage(images[nextIndex].Image);
    };

    return (
        <>
            <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto mb-4"
            />

            <div className="w-full flex justify-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-sm"
                >
                    <CarouselContent>
                        {images.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img
                                                src={item.Image}
                                                alt={`Carousel image ${index + 1}`}
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    setCurrentIndex(index);
                                                    selectImage(item.Image);
                                                }}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious onClick={() => { handlePrevious(); triggerSelect(); }} />
                    <CarouselNext onClick={() => { handleNext(); triggerSelect(); }} />
                </Carousel>
            </div>
        </>
    );
}
