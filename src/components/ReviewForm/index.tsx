import './styles.css'
import React from 'react'
import Button from 'components/Button'


const ReviewForm = () => {
  return (
    <>
      <form className="container-review-form">
        <div className="mb-4 input-review-form">
          <input
            type="text"
            className="form-control"
            name="text"
            placeholder="Deixe sua avaliação aqui"
          />
        </div>
        <div className="button-review-form">
          <Button text={'Salvar avaliação'} />
        </div>
      </form>
    </>
  )
}

export default ReviewForm
