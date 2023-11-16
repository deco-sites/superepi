import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export interface Props {
  /** @description Digite no formato YYYY-MM-DDTHH:MM:SS */
  initial: string;

  /** @description Digite no formato YYYY-MM-DDTHH:MM:SS */
  finish: string;
}

export default function TimerCampaign({ initial, finish }: Props) {
  const isDayCampaign = useSignal(false)
  const timer = useSignal<{
    days: null | number,
    hours: null | number,
    min: null | number,
    seg: null | number
  }>({
    days: null,
    hours: null,
    min: null,
    seg: null
  })

  useEffect(() => {
    const dateInitial = new Date(initial)
    const dateFinish = new Date(finish)
    
    if (dateInitial.getTime() < new Date().getTime() && new Date().getTime() < dateFinish.getTime()) {
      let timestampBetweenDateNowandDateFinish = dateFinish.getTime() - new Date().getTime();
      setInterval((e) => {
        timestampBetweenDateNowandDateFinish -= 1000;
        if (timestampBetweenDateNowandDateFinish !== 0) {
          const days = timestampBetweenDateNowandDateFinish / (1000 * 3600 * 24);
          const hours = (days - Math.floor(days)) * 24;
          const min = (hours - Math.floor(hours)) * 60;
          const seg = (min - Math.floor(min)) * 60;
          timer.value = {
            days,
            hours,
            min,
            seg
          }
        } else {
          clearInterval(e)
        }
      }, 1000)
      isDayCampaign.value = true
    } else {
      console.log("ELSE")
      isDayCampaign.value = false
    }
  }, [])
  return (
    <div class="flex gap-2 text-black">
      <span class="w-[72px] bg-[#f8a531] p-2 text-white font-semibold flex flex-col items-center">{ Math.floor(timer.value.days) } <strong>DIAS</strong></span>
      <span class="p-2 text-black font-bold">:</span>
      <span class="w-[72px] bg-[#f8a531] p-2 text-white font-semibold flex flex-col items-center">{ Math.floor(timer.value.hours) } <strong>HORAS</strong></span>
      <span class="p-2 text-black font-bold">:</span>
      <span class="w-[72px] bg-[#f8a531] p-2 text-white font-semibold flex flex-col items-center">{ Math.floor(timer.value.min) } <strong>MIN</strong></span>
      <span class="p-2 text-black font-bold">:</span>
      <span class="w-[72px] bg-[#f8a531] p-2 text-white font-semibold flex flex-col items-center">{ Math.floor(timer.value.seg) } <strong>SEG</strong></span>
    </div>
  )
}
