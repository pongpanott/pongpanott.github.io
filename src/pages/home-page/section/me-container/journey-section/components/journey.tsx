import { JourneyModel } from 'common/types/journey';
import { BaseComponentProps } from 'common/types/base-component';
import Link from 'next/link';

type JourneyProps = BaseComponentProps & {
    journey: JourneyModel;
};

const Journey = ({ className, journey }: JourneyProps) => {
    return journey ? (
        <div className={className}>
            <div className="mb-4">
                <p className="text-sm mb-1 md:text-base">
                    {journey.position}
                    <Link
                        href={journey?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        {journey.where}
                    </Link>
                </p>
                <p className="text-2xs md:text-xs">{journey.date}</p>
            </div>

            <ul className="flex flex-col gap-y-1">
                {journey.description.map((item) => (
                    <li key={item} className="flex">
                        <span className="custom-bullet-point" />
                        <span className="text-xs md:text-sm">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
};

export default Journey;
