/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/attention_plot.png'
import * as S from './styles'

const Byggern = () => {
  return (
        <S.MainWrapper>
                <S.ImageWrapper>
                    <img src={placeholder} />
                </S.ImageWrapper>

                <S.TextWrapper>
                    <h1> Russian Translator </h1>
                    <p>
                    When I started working on this project, I had a clear goal to create a witty deep-learning chatbot,
                    using the Transformer model proposed in the paper <a href = "https://arxiv.org/abs/1706.03762?context=cs"> "Attention is all you need"</a>, which is
                    known as state of the art within Natural language Generation (NLG). This, however,
                    turned out to be difficult as the chatbot showed very poor results, and I then
                    proceeded to create a translator between Russian and English, using the same model.

                    <br></br><br></br>

                    The project served as my final exam in the class <a href = "https://www.unibo.it/en/teaching/course-unit-catalogue/course-unit/2020/446593"> Machine Learning</a>, at the
                    University of Bologna and achieved the highest Italian grade of 30. My approach to implementing
                    the chatbot and Russian translator has been to
                    follow a tutorial by Tensorflow, "Transformer model for language
                    understanding", where they teach you to create a translator from Portuguese to English.
                    I first created the translator in the tutorial, and then made my changes to the model
                    to accustom it to a dataset instead consisting of questions and answers. To have
                    some fun in the process, I've chosen a dataset consisting of jokes on the question-answer form.
                    After training the chatbot, I proceeded to train the model using a Russian to English dataset.

                    <br></br><br></br>

                    The most important finding in this project was the difference in performance between
                    the Russian to English translator and the question-answering chatbot. Even though I
                    wouldn't brag about the results obtained from any of them, the translator worked while
                    the chatbot didn't. The same Transformer was used for both the translator and chatbot,
                    which clearly shows the importance of the choice of dataset. The dataset chosen for the
                    chatbot had too little correlation between the questions and answers, making it
                    impossible for the model to generalize. The Russian to English dataset had far more
                    correlation, which makes sense as similar semantics between languages is typical.
                    In making my next chatbot, I'll be sure to use transfer learning 😀

                    <br></br><br></br>

                    The repository for this project can be found <a href = "https://github.com/camilladybdal/transformer_project"> here</a>, where you
                    also will find a report discussing the problem, datasets, and results in detail.
                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Byggern
