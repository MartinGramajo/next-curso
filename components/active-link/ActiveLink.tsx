'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

// importamos el style de los active link
// nota: si no tenemos el: .module.css no va a funcionar. 
import style from './ActiveLink.module.css';


interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${(pathName === path) && style['active-link']}`}
      href={path}>
      {text}</Link>
  )
}
