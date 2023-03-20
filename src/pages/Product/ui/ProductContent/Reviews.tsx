import { FC, useState } from 'react';
import { GoStar } from 'react-icons/go';

import { calculateRating, ProductReviewType, Review } from 'entities/Review';
import { Button } from 'shared/ui/Button';

interface RatingProps {
  reviews: ProductReviewType[];
}

const RatingPercent: FC<RatingProps> = ({ reviews }) => {
  const ratingsCount = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    ratingsCount[review.rating - 1] += 1;
  });

  const percentages = ratingsCount.map(count => (count / reviews.length) * 100);

  return (
    <>
      {[5, 4, 3, 2, 1].map(rating => (
        <div key={rating} className={'flex items-center'}>
          <span className={'w-2 mr-2 text-sm'}>{rating}</span>
          <div className={'bg-gray-medium w-36 h-2 rounded-full'}>
            <div
              className={'bg-gray-dark h-full rounded-full'}
              style={{ width: `${percentages[rating - 1]}%` }}></div>
          </div>
          <p className={'w-7 ml-2 text-sm text-right'}>
            {percentages[rating - 1].toFixed(0)}%
          </p>
        </div>
      ))}
    </>
  );
};

export const Reviews: FC<RatingProps> = ({ reviews }) => {
  const [sortingType, setSortingType] = useState('useful');

  const ratings = reviews.map(review => review.rating);
  const averageRating = calculateRating(ratings);

  const handleSort = (type: string) => {
    setSortingType(type);
  };

  const buttons = [
    {
      text: 'Useful first',
      type: 'useful',
    },
    {
      text: 'New',
      type: 'new',
    },
    {
      text: 'Top Grades',
      type: 'top',
    },
    {
      text: 'Worst Grades',
      type: 'worst',
    },
  ];
  return (
    <div className={'flex gap-5'}>
      <div className={'flex flex-col'}>
        <p className={'flex items-center'}>
          <GoStar className={'text-orange mr-1'} />
          <span className={'mr-4'}>{averageRating.toFixed(2)}</span>
          <span>{reviews.length} reviews</span>
        </p>
        <div className={'mt-4'}>
          <RatingPercent reviews={reviews} />
        </div>
        <Button className={'bg-light mt-4 p-1 text-orange justify-center'}>
          Write a review
        </Button>
      </div>
      <div className={'w-full'}>
        <div className={'flex mb-5'}>
          {buttons.map(button => (
            <Button
              key={button.type}
              className={`text-gray-hot hover:bg-gray-pale duration-500 ${
                sortingType === button.type && 'bg-gray-pale'
              }`}
              size={'sm'}
              onClick={() => handleSort(button.type)}>
              {button.text}
            </Button>
          ))}
        </div>
        <div className={'flex flex-col'}>
          {reviews.map(review => (
            <Review
              key={review.author.name + review.text.comment.length}
              author={review.author}
              text={review.text}
              rating={review.rating}
              likes={review.likes}
              dislikes={review.dislikes}
              date={review.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
