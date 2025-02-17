import React, { useState } from 'react';
import StarRating from './StarRating';

const Review = ({ comments, commentsCount, newComment, setNewComment, rating, setRating, handleCommentSubmit }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const latestComments = comments.slice(0, 3);

  return (
    <li className={`has-child ${isOpen ? 'expand' : ''}`}>
      <a href="#" className="icon-small" onClick={handleToggle}>Review<span className="mini-text">{commentsCount}</span></a>
      <div className={`content ${isOpen ? 'expand' : ''}`}>
        <div className="review-block-body">
          <div className="comments">
            <h3>Отзывы</h3>
            {latestComments.length > 0 ? (
              latestComments.map(comment => (
                <div key={comment.comment_id} className="comment">
                  <div className="review-from">
                    <p className="person">Review by {comment.customer_login}</p>
                    <p className="mini-text">On {new Date(comment.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="review-rating">
                    {[...Array(5)].map((star, index) => (
                      <span key={index} className={`star ${index < comment.rating ? 'on' : 'off'}`}>
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <div className="review-title">
                    <p>Awesome product!</p>
                  </div>
                  <div className="review-text">
                    <p>{comment.comment_text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Отзывов пока нет.</p>
            )}
          </div>
        </div>
        {isOpen && (
          <div id="review-form" className="review-form">
            <div className="add-comment">
              <h3>Добавить комментарий</h3>
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Ваш комментарий"
                  required
                />
                <div>
                  <label>Рейтинг: </label>
                  <StarRating rating={rating} setRating={setRating} />
                </div>
                <button type="submit">Отправить</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default React.memo(Review);
