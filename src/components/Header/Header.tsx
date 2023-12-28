import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/gdsc-logo.png';
import './Header.css';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/#home', current: true },
  { name: 'About', href: '/#about', current: false },
  { name: 'Events', href: '/#events', current: false },
  { name: 'Team', href: '/#team', current: false },
];

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface HeaderProps {}

export default function Header(_: HeaderProps): JSX.Element {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="header mt-4 rounded-3xl mx-4 md:mx-4 lg:mx-auto drop-shadow-md max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-14 w-auto" src={logo} alt="Your Company" />
                  <h1 className="ml-4 text-2xl">GDSC-PRC</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex items-center mr-10">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'border-b-4 border-b-blue-500 text-black'
                            : 'text-black hover:bg-blue-100 rounded-md',
                          'px-3 py-2 text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-100 text-black' : 'hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
