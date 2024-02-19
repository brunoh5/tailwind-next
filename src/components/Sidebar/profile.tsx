import { LogOut } from 'lucide-react'

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/brunoh5.png"
        className="size-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Bruno Henrique
        </span>
        <span className="truncate text-sm text-zinc-500">
          brunohenriquesantos272@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
