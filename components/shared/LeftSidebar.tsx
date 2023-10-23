"use client";
import { sidebarLinks } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link, index) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <div key={index} className="text-white">
              <Link
                href={link.route}
                className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
              >
                <Image
                  src={link.imgURL}
                  alt="sidebarlogos"
                  width={24}
                  height={24}
                ></Image>
                <p className="max-lg:hidden text-light-1"> {link.label} </p>
              </Link>
            </div>
          );
        })}
        <div className="mt-10">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer gap-4 p-4">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                ></Image>
                <p className="text-light-1">Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </section>
  );
}
export default LeftSidebar;
