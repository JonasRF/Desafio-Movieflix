
import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Review } from "../../types/review";
import { requestBackend } from "../../util/requests";
import ButtonReview from "../ButtonReview";

import './styles.css';

type UrlParams = {
  movieId: string;
};

const Form = () => {
    const { movieId } = useParams<UrlParams>();

    const { register, handleSubmit } = useForm<Review>();

     const onSubmit = (formData: Review) => {
        
      const config: AxiosRequestConfig = {
        method:'POST',
        url:`/reviews/${movieId}`,
        data: formData,
        withCredentials: true
    };
     requestBackend(config)
      .then((response) => {
        console.log('SUCESSO', response.data);
      })
    }   
     return( 
        <div className="base-card base-card-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
            {...register('text')}
                type="text"
                className="form-control base-input-form"
                placeholder="Deixe sua avaliação aqui"
                name="text"
              />
            </div>
            <div>
              <ButtonReview text="SALVAR AVALIAÇÃO" />
            </div>
          </form>
        </div>
     );
}
export default Form;