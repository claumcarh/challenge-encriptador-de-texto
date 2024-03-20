import classNames from 'classnames';
import '@/assets/styles/components/button.scss';

function Button({ children, className, modifier, onClick }) {
  let modifierClass = '';

  if (modifier === 'primary') {
    modifierClass = 'button--primary';
  } else if (modifier === 'secondary') {
    modifierClass = 'button--secondary';
  }

  return (
    <button
      className={classNames('button', className, modifierClass)}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
