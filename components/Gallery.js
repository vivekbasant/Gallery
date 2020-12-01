
import { PhotoSwipeGallery } from "react-photoswipe";

let options = {
    //http://photoswipe.com/documentation/options.html
  };
  

let getThumbnailContent = (item) => {
  return <img src={item.thumbnail} width={120} height={90} />;
};

export default function Gallery(props)
{
    return <PhotoSwipeGallery items={props.pic} options={options} thumbnailContent={getThumbnailContent}/>
}
