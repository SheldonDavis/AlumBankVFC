import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

//import custom navigation structure
import { Navigation_Data } from '~/database/Navigation_Data';

//import custom types
import type { VFC_Data } from '~/customTypes/Page';

//import structural component
import Image from '~/Components/Image';

export default function Header(params: any) {
  console.log(params);
  const [subNavOpen, setSubNavOpen] = useState(``);
  const HoverToOpenMenuDD = ` hidden md:group-hover:block `;
  const ToggledOpenMenuDD = ` block `;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const MobileNavOpen = `isOpened`;
  const MobileNavClosed = `isClosed`;

  const logo: VFC_Data = {
    type: `i`,
    value: `/AlumBankBadgeTrace.png`,
    alt: `Alum Bank Volunteer Fire Company Logo`,
    link: `/`,
    css: `h-45 max-h-full w-auto py-4`,
  };

  function toggleSubNav(s: string) {
    s === subNavOpen ? setSubNavOpen(``) : setSubNavOpen(s);
  }
  return (
    <header className={`flex items-center flex-col gap-4 shrink-0`}>
      <Image {...logo} />
      <nav className={mobileNavOpen ? MobileNavOpen : MobileNavClosed}>
        <span
          onClick={() => {
            setMobileNavOpen(!mobileNavOpen);
          }}
        >
          <FontAwesomeIcon icon={mobileNavOpen ? faXmark : faBars} size={`xl`} />
        </span>
        <ul className={``}>
          {Navigation_Data.map((item) => (
            <li key={item.label} className={`group`}>
              {item?.link && (
                <NavLink
                  to={item.link}
                  className={({ isActive }) => {
                    // Check if the current URL matches the parent OR any of its sub-values
                    const isChildActive = item.values?.some((sub) => window.location.pathname === sub.link);

                    return isActive || isChildActive ? `active` : ``;
                  }}
                  onClick={(e) => {
                    item?.type !== `t` && e.preventDefault();
                    toggleSubNav(item?.type === `t` ? `` : item.link?.split(`/`)[1] || ``);
                    {
                      item?.type === `t` && setMobileNavOpen(false);
                      console.log(item.link?.split(`/`)[1]);
                    }
                  }}
                >
                  {item?.label}
                  {item?.type === `l` && item?.values && <FontAwesomeIcon icon={faCaretDown} size={`xs`} className={`pl-1`} />}
                </NavLink>
              )}
              {item?.type === `l` && item?.values && (
                <ul className={`${item?.link && subNavOpen === item?.link.split(`/`)[1] ? ToggledOpenMenuDD : HoverToOpenMenuDD}`}>
                  {item?.values.map(
                    (subItem) =>
                      subItem?.link && (
                        <li key={subItem.value}>
                          <p>
                            <NavLink
                              to={subItem?.link}
                              onClick={() => {
                                toggleSubNav(``);
                                setMobileNavOpen(false);
                              }}
                              end
                            >
                              {subItem?.value}
                            </NavLink>
                          </p>
                        </li>
                      ),
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
