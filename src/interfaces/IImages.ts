export declare interface IImages {
  images: IImage[];
}

export declare interface IImage {
  basename: string;
  name: string;
  extension: "png" | "webp" | "gif" | "jpg" | "jpeg";
  size: number;
  type: "image/png" | "image/webp" | "image/gif" | "image/jpg" | "image/jpeg";
  url: URL;
}