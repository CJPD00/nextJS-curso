import { POST } from "@/app/api/auth/[...nextauth]/route";
import { formatdate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import { Button } from "./ui/button";
import { Startup, Author } from '../src/sanity/types';

export type StartupTypeCard= Omit<Startup,"author"> & {author?:Author} 

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatdate(_createdAt)}</p>
        <div className="flex gap-2">
          <EyeIcon className="size-5 text-primary"></EyeIcon>
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          ></Image>
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup_card_desc">{description}</p>
        <Image
          src={image}
          alt=""
          className="startup_card_image"
          width={400}
          height={200}
        ></Image>
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Read More</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
