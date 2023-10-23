"use client";
import { sidebarLinks } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
function Bottombar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <section className="bottombar">
        <div className="bottombar_container">
          {sidebarLinks.map((link, index) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <div key={index} className="text-white">
                <Link
                  href={link.route}
                  className={`bottombar_link ${isActive && "bg-primary-500"}`}
                >
                  <Image
                    src={link.imgURL}
                    alt="sidebarlogos"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-subtle-medium text-light-1 max-sm:hidden">
                    {link.label}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Bottombar;
