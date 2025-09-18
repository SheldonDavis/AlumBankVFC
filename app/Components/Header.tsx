import { NavLink } from 'react-router';
import { useState } from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

//import custom navigation structure
import { Navigation_Data } from '~/database/Navigation_Data';

//import structural component

export default function Header(params: any) {
  const [subNavOpen, setSubNavOpen] = useState(``);
  const HoverToOpenMenuDD = ` hidden md:group-hover:block `;
  const ToggledOpenMenuDD = ` block `;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const MobileNavOpen = ``;
  const MobileNavClosed = `isClosed`;

  function toggleSubNav(s: string) {
    s === subNavOpen ? setSubNavOpen(``) : setSubNavOpen(s);
  }

  return (
    <header className={``}>
      <nav className={mobileNavOpen ? MobileNavOpen : MobileNavClosed}>
        {
          //bg-slate-900
        }
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
                  className={`${params.path === item.link.split(`/`)[1] && `active`}`}
                  onClick={(e) => {
                    item?.type !== `t` && e.preventDefault();
                    toggleSubNav(item?.type === `t` ? `` : item.link?.split(`/`)[1] || ``);
                    {
                      item?.type === `t` && setMobileNavOpen(false);
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
                            >
                              {subItem?.value}
                            </NavLink>
                          </p>
                        </li>
                      )
                  )}
                </ul>
              )}
            </li>
          ))}
          {/* <li className={NavItemStyles}>
              <NavLink to='/' className={NavLinkStyles}>
                Home
              </NavLink>
              <ul className={NavDropDownStyles}>
                <li>oneoneoneoneoneoneoneone</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </li>
            <li className={NavItemStyles}>
              <NavLink
                to='/who-we-are/about-us'
                className={`${NavLinkStyles} ${subNavLoaded === `who-we-are` && `active`}`}
                onMouseOver={() => setSubNav(`who-we-are`)}
              >
                Who We Are
              </NavLink>
            </li>
            <li className={NavItemStyles}>
              <NavLink
                to='/membership/become-a-member'
                className={`${NavLinkStyles} ${subNavLoaded === `membership` && `active`}`}
                onMouseOver={() => setSubNav(`membership`)}
              >
                Membership
              </NavLink>
            </li>
            <li className={NavItemStyles}>
              <NavLink
                to={`/activities/auctions`}
                className={`${NavLinkStyles} ${subNavLoaded === `activities` && `active`}`}
                onMouseOver={() => setSubNav(`activities`)}
              >
                Activities
              </NavLink>
            </li>
            <li className={NavItemStyles}>
              <NavLink
                to='/contacts-rentals/contact-us'
                className={`${NavLinkStyles} ${subNavLoaded === `contacts-rentals` && `active`}`}
                onMouseOver={() => setSubNav(`contacts-rentals`)}
              >
                Contacts & Rentals
              </NavLink>
            </li> */}
        </ul>
        {/* <span className={`bg-(--color-primary)  block`}>
          <ul className={`flex flex-row gap-2 bg-(--color-primary) text-center items-center m-auto max-w-7xl`}>
            {subNav === `who-we-are` && (
              <>
                <li className={NavItemStyles}>
                  <NavLink to='/who-we-are/about-us' className={NavLinkStyles}>
                    About Us
                  </NavLink>
                </li>
                <li className={NavItemStyles}>
                  <NavLink to='/who-we-are/history' className={NavLinkStyles}>
                    History
                  </NavLink>
                </li>
                <li className={NavItemStyles}>
                  <NavLink to='/who-we-are/apparatus' className={NavLinkStyles}>
                    Apparatus
                  </NavLink>
                </li>
                <li className={NavItemStyles}>
                  <NavLink to='/who-we-are/knox-box' className={NavLinkStyles}>
                    Knox Box Info
                  </NavLink>
                </li>
              </>
            )}
            {subNav === `membership` && (
              <>
                <li className={NavItemStyles}>
                  <NavLink to='/membership/officers' className={NavLinkStyles}>
                    Officers
                  </NavLink>
                </li>

                <li className={NavItemStyles}>
                  <NavLink to='/membership/members' className={NavLinkStyles}>
                    Members
                  </NavLink>
                </li>

                <li className={NavItemStyles}>
                  <NavLink to='/membership/auxiliary-members' className={NavLinkStyles}>
                    Auxiliary Members
                  </NavLink>
                </li>

                <li className={NavItemStyles}>
                  <NavLink to='/membership/become-a-member' className={NavLinkStyles}>
                    Becoming a Member
                  </NavLink>
                </li>
              </>
            )}
            {subNav === `contacts-rentals` && (
              <>
                <li className={NavItemStyles}>
                  <NavLink to='/contacts-rentals/contact-us' className={NavLinkStyles}>
                    Contact us
                  </NavLink>
                </li>

                <li className={NavItemStyles}>
                  <NavLink to='/contacts-rentals/fire-hall-rentals' className={NavLinkStyles}>
                    Fire Hall Rentals
                  </NavLink>
                </li>
              </>
            )}
            {subNav === `activities` && (
              <>
                <li className={NavItemStyles}>
                  <NavLink to='/activities/auctions' className={NavLinkStyles}>
                    Auctions
                  </NavLink>
                </li>
                <li className={NavItemStyles}>
                  <NavLink to='/activities/car-show' className={NavLinkStyles}>
                    Car Show
                  </NavLink>
                </li>
              </>
            )}
            {subNav === `` && (
              <>
                <li className={NavItemStyles}>
                  <p className={`${NavLinkStyles} opacity-0`}>placeholder, show not be visible.</p>
                </li>
              </>
            )}
          </ul>
        </span> */}
      </nav>
    </header>
  );
}
