import type { Location } from "@/lib/types";

export default function LocationNAP({ location }: { location: Location }) {
  const street = location.address2
    ? `${location.address1}, ${location.address2}`
    : location.address1;

  return (
    <div className="space-y-1 text-sm text-zinc-600">
      <div className="text-base font-semibold text-zinc-900">
        {location.name}
      </div>
      <div>{street}</div>
      <div>
        {location.city}, {location.region} {location.postalCode}
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        <a className="font-semibold text-zinc-900" href={`tel:${location.phone}`}>
          {location.phone}
        </a>
        <a className="font-semibold text-zinc-900" href={`mailto:${location.email}`}>
          {location.email}
        </a>
      </div>
    </div>
  );
}
