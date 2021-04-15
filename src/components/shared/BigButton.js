import style from './BigButton.module.css';

const BigButton = (props) => {
  const { children, href} = props
  return (
    <a className={style.bigButton} href={href}>
      {children}
    </a>
  )
}
export default BigButton;