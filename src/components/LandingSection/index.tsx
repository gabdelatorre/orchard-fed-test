"use client";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ImageModal } from "../ImageModal";
import { ImageType, LandingArticleType } from "@/types";

const ARTICLE_CONTENT: LandingArticleType = {
  images: [
    {
      imageUrl: "/component-01/Image-01.jpg",
      previewUrl: "/component-01/Image-01@2x.jpg",
      alt: "dad and son walking in the fields",
    },
    {
      imageUrl: "/component-01/Image-02.jpg",
      previewUrl: "/component-01/Image-02@2x.jpg",
      alt: "bowl of fruits and vegetables",
    },
    {
      imageUrl: "/component-01/Image-03.jpg",
      previewUrl: "/component-01/Image-03@2x.jpg",
      alt: "asparagus",
    },
  ],
  primary: {
    title: "Answer your body's needs",
    description:
      "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
  },
  secondary: {
    title: "Be Mindful",
    description:
      "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
  },
};

export const LandingSection = () => {
  const content = ARTICLE_CONTENT;
  const [selectedImage, setSelectedImage] = useState<ImageType>();

  const handleImageClick =
    (image: ImageType) => (evt: MouseEvent<HTMLButtonElement>) => {
      console.log({ evt });
      setSelectedImage(image);
    };

  const handleModalChange = (open: boolean) => {
    if (!open) setSelectedImage(undefined);
  };

  return (
    <Dialog.Root onOpenChange={handleModalChange}>
      <section className="flex gap-4 xs:px-8 sm:px-24 xl:px-40 xs:pt-8 sm:pt-24 xl:pt-40">
        <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 col-span-2">
            <div className="ml-auto mr-auto">
              <Dialog.Trigger asChild>
                <button onClick={handleImageClick(content.images[0])}>
                  <Image
                    src={content.images[0].imageUrl}
                    alt={content.images[0].alt}
                    width={500}
                    height={500}
                  />
                </button>
              </Dialog.Trigger>
            </div>
            <div className="flex flex-col gap-4">
              <div className="ml-auto mr-auto md:ml-0 md:mr-0">
                <Dialog.Trigger asChild>
                  <button onClick={handleImageClick(content.images[1])}>
                    <Image
                      src={content.images[1].imageUrl}
                      alt={content.images[1].alt}
                      width={400}
                      height={400}
                    />
                  </button>
                </Dialog.Trigger>
              </div>
              <div className="ml-auto mr-auto md:ml-0 md:mr-0">
                <Dialog.Trigger asChild>
                  <button onClick={handleImageClick(content.images[2])}>
                    <Image
                      src={content.images[2].imageUrl}
                      alt={content.images[2].alt}
                      width={400}
                      height={400}
                    />
                  </button>
                </Dialog.Trigger>
              </div>
            </div>
          </div>

          <div>
            <article className="mb-8">
              <h1 className="uppercase font-light text-2xl pb-4 border-b border-solid border-orchard-grey-100 mb-6 text-orchard-grey-100">
                {content.primary.title}
              </h1>
              <p className="font-light leading-7 text-orchard-grey-100">
                {content.primary.description}
              </p>
            </article>
            <article>
              <h2 className="uppercase text-orchard-red text-sm font-bold mb-2">
                {content.secondary.title}
              </h2>
              <p className="leading-7">{content.secondary.description}</p>
            </article>
          </div>
        </div>

        {selectedImage && <ImageModal image={selectedImage} />}
      </section>
    </Dialog.Root>
  );
};
