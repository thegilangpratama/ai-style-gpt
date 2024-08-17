"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navbar: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			className={`w-full flex justify-center border-b border-gray-200 bg-[#001B44]/50 backdrop-blur-xl z-50 transition-all text-white`}
		>
			<div className="flex h-16 mx-5 items-center justify-between w-full">
				<p className="text-2xl font-bold leading-tight tracking-tight md:tracking-tighter">
					<Link href="https://www.thegilangpratama.com">
						thegilangpratama
					</Link>
				</p>
				<p className="hidden md:block">Empowering Conversations Through Smart Keyword Matching</p>
			</div>
		</div>
	);
};
