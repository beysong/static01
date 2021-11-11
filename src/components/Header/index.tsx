import { setLocale, useIntl } from 'umi';

import './index.css';
const menus = [{ id: 'home' }, { id: 'project' }];
export default function IndexPage() {
  const intl = useIntl();
  return (
    <header className="header container mx-auto">
      <div className="logo">
        {intl.formatMessage({
          id: 'site.title',
        })}
      </div>
      <div className="flex-1">
        <ul className="header-menu">
          {menus.map((v) => (
            <li key={v.id} className="menu-item">
              <a href="#id1">
                {intl.formatMessage({
                  id: 'menu.' + v.id,
                })}
              </a>
            </li>
          ))}

          <li className=" menu-item">
            <span
              onClick={() => {
                setLocale('zh-CN', true);
              }}
            >
              中文
            </span>
            /
            <span
              onClick={() => {
                setLocale('en-US', true);
              }}
            >
              EN
            </span>
          </li>
        </ul>
      </div>
      <div className="header-phone flex items-center">
        <div className="header-phone-img">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAABHNCSVQICAgIfAhkiAAABJlJREFUWEe1WFFy0zAQ3Y3DTPtFOQHlBMAJaIaUIf0hHZpv0hOQnoBwAsoJCN8JQ/qTMDRM0xNQToA5AeWrzMTJspItZ63KttIGf3QaeyU97b59uxKC59OafHlNsOgi4CURHA52G1PPoTcyw7JRra9fHwFGHwDxkbRlcDUD7mAy7vG3+/o70QVUNPhwHsD5sNYIy9ZwfS8E1vo2bhPRO/bSlj2YgC6jYPPBsFa7VHZA8MEJQAHFSm8W0MkqIHOBFS6WICCAj4N6o61+HpyOOsAbQKCd+DN7GOGuAas2wl4/jiob79VmyrzoBPZyMmpWAD+XDVbfZwGw19zhiueBHSBsG5AKICIe9Z82VPhzHyew1unou82pvBmk1/JsmmdnW9Xob4cX66QAiY4Hu3tHeWPcwCZjXs//KfKanEUBvBNdDXnTT9R7XmQaBRv7rtCuBRgv8b5f32OO+T2tyeiYOfg6tqYhj923R64FmOLNoL53zw9WbJVNrusby+PY1Ljbb7HVPGbmVPrHAF6p3wug/U/1vaH5lgLTO5gHF/1nzy4OTsddRHjjA4qF9C0LbdfH1mXDiWacEPbrjQcZYDpr5lc/TRozsB0Gdlaw2A8W3l5U3ez5aFIR6ObZePvOHH5qthEdcaYy/5iB6o8SRwb1TqZ+y5WZROez6mbztmBsoCaksppoYEa3Mkou4i8myrj7puGzx2kZmf/9LbmGukhX5t+18SJ4rDim/s1Vf2GzLmBx1MZDps8L4xw0YWS1+9PfbWSKdet0zPVtWe80D0R9XC8wQ6dYejCNL8EJZ1dTLibT2byXPFgnsGwSQA1NurrSPhNmgeK2EpG3IZNwqtdjj41+q37LFjgzmI0V5x7Kyf6X1xhLyFjuK9lAidLVLuf3ZTdT+6Lwy+ilwPI8pjMm2Yk9qWyv18E3G5gOVRFvCrrZcBZsPF6X4KZ6qkOZ1KoyQouaZjunxzXucC0eS6pNTH4jbA65kIvJdHaEtLSQx13s1RsufR0m97Xu1RZ6lGHisNwrCksqxi73IBwW9fHX2nU+PXHdrZn1lvWafrHAbqOrThWFxSW6qfjm9PHZjjUjiCm4pMNhvuNUnbxMEU96Inebmw2pLrhTW9uWNjScBZuHS0+UtFDCcyqci0q0rRrGGJg4sPpIQOLlAnAQmmsEw+GiKKhDCXupJm2WHWyi8C4j16Qe4HgYcauMmfqbB1A2icomBZbpWkuIbCa3j2O3kQz7QJM5jEi3+4TUAMkl94pI5ZoZYDI8+ii/qNZM41i2hm4sCXt2/1Y2Tn7PBaaMtJBGwDc0cNf3nkGGlq8CeqoTXQWQsrUbUPe5ktOWKhGnLOo7L0Lo+t7SKPtVvWcTP0N+e4eOrAsXAN1P9cZHH2/E46+6y6sAxyhu5xdIbXnQNValN4qOwy9rlJKBynSw+/ykDKSiRnUOfEUan7jNw3w6iarQybvCKgVmeOeaPFkkZH6ENkB+15PeTa6i9HUpAwrLbhe9gC3JzbuPqMkdQpvfZdptl+eKrpnKPL0SMDmZDlEE25wa7AW+4kTaIsLkCpOlhqpTX6lxgfwHr6r0R+DQSHEAAAAASUVORK5CYII="
            alt=""
          />
        </div>
        <div>
          <div className="header-phone-title">Business invitation</div>{' '}
          <div className="header-phone-phone">029-82281515</div>
        </div>
      </div>
    </header>
  );
}
