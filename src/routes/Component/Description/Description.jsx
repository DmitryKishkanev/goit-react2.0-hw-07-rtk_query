import { useNavigate } from 'react-router-dom';
import style from './Description.module.css';

const Description = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`..`);
  };

  return (
    <div className={style.descriptionContainer}>
      <p className={style.text}>
        Данное приложение реализовано на основе функциональных компонентов
        React. Управление состоянием реализовано через библиотеку Redux Toolkit,
        что демонстрирует практическое применение внешнего хранилища данных.
        Приложение записывает и сохраняет имя с номером телефона в виде
        классической телефонной книги. Контакты можно удалять или фильтровать по
        имени.
      </p>

      <button
        className={style.descriptionButton}
        type="button"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default Description;
