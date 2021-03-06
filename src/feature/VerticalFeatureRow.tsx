import className from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  link?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        {props.link && <a href={props.link}>{props.link}</a>}
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        {props.link ? (
          <a href={props.link}>
            <Image
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              height="249"
              width="500"
            />
          </a>
        ) : (
          <Image
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            height="249"
            width="500"
          />
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
