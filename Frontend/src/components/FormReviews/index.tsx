import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Review } from "../../types/review";
import { requestBackend } from "../../util/requests";
import ButtonReview from "../ButtonReview";
import { toast } from 'react-toastify';

import './styles.css';

type UrlParams = {
  movieId: string;
};

type Props = {
  onSubmitForm : (data: UrlParams) => void;
}

const FormReviews = ( { onSubmitForm } : Props) => {
 
  const { movieId } = useParams<UrlParams>();

    const { register, handleSubmit, formState: { errors } } = useForm<Review>();

     const onSubmit = (formData: UrlParams) => {

      const config: AxiosRequestConfig = {
        method:'POST',
        url:`/reviews/${movieId}`,
        data: formData,
        withCredentials: true
    };
     requestBackend(config)
      .then((response) => {
        toast.info('Avaliação do filme cadastrada com sucesso!');
        onSubmitForm(response.data)
      })
      .catch(() => {
        toast.error('Erro ao cadastrar avaliação do fime!');
      })
      ;
    }   
    
     return( 
        <div className="base-card base-card-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
            {...register('text', {
              required: "Campo não pode ficar em branco!",
            })}
                type="text"
                className={`form-control base-input-form ${errors.text ? 'is-invalid': ''}`}
                placeholder="Deixe sua avaliação aqui"
                name="text"
              />
            </div>
            <div className="invalid-feedback d-block base-card-invalid-feedback">{errors.text?.message}</div>
            <div>
              <ButtonReview text="SALVAR AVALIAÇÃO" />
            </div>
          </form>
        </div>
     );
}
export default FormReviews;