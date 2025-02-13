"use client";
import { BistIcon } from "@marketicons/bist-react";

export default function IconsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">BIST İkonları</h1>

      <div className="space-y-12">
        {/* Farklı boyutlarda ikonlar */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Farklı Boyutlar</h2>
          <div className="flex items-center gap-4">
            <BistIcon name="THYAO" size={50} />
            <BistIcon name="THYAO" size={100} />
            <BistIcon name="THYAO" size={200} />
          </div>
        </section>

        {/* Farklı şirketlerin ikonları */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Farklı Şirketler</h2>
          <div className="flex items-center gap-4">
            <BistIcon name="GARAN" size={32} />
            <BistIcon name="AKBNK" size={32} />
            <BistIcon name="EREGL" size={32} />
          </div>
        </section>

        {/* Özel başlıklı ikon */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Özel Başlık</h2>
          <BistIcon name="SASA" size={32} title="SASA Polyester" />
        </section>

        {/* Özel stilli ikon */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Özel Stil</h2>
          <BistIcon
            name="KCHOL"
            size={32}
            style={{
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))",
              cursor: "pointer",
            }}
          />
        </section>

        {/* Hover efektli ikonlar */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Hover Efektli</h2>
          <div className="flex items-center gap-4">
            <BistIcon
              name="ASELS"
              size={32}
              className="transition-transform hover:scale-110"
            />
            <BistIcon
              name="TUPRS"
              size={32}
              className="transition-all hover:opacity-80"
            />
            <BistIcon
              name="TOASO"
              size={32}
              className="transition-all hover:rotate-12"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
