'use client'

import { LandPlot, Search, Users, Trophy, Star, Calendar, MapPin, Clock } from 'lucide-react'

export default function GolfDashboard() {
  return (
    <div className="relative h-[856px] w-[425px] mx-auto m-height-[200px] overflow-hidden">
      {/* Phone Frame */}
      <div className="absolute bg-[#1a1a1a] bottom-0 left-[3px] pointer-events-none right-[3px] rounded-[62px] top-0">
        <div 
          aria-hidden="true" 
          className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 rounded-[62px]" 
        />
        <div className="absolute inset-0 shadow-[0px_0px_8px_0px_inset_rgba(255,255,255,0.9)]" />
      </div>
      
      {/* Phone Screen */}
      <div className="absolute bg-black bottom-1 left-[7px] right-[7px] rounded-[58px] top-1" />
      
      {/* Side Buttons */}
      <div className="absolute bg-[#333333] h-[30px] left-0 rounded-bl-[1px] rounded-tl-[1px] top-[136px] w-[3px]">
        <div className="absolute inset-0 pointer-events-none shadow-[1px_0px_2px_0px_inset_rgba(255,255,255,0.5)]" />
      </div>
      <div className="absolute bg-[#333333] h-[62px] left-0 rounded-bl-[1px] rounded-tl-[1px] top-[198px] w-[3px]">
        <div className="absolute inset-0 pointer-events-none shadow-[1px_0px_2px_0px_inset_rgba(255,255,255,0.5)]" />
      </div>
      <div className="absolute bg-[#333333] h-[62px] left-0 rounded-bl-[1px] rounded-tl-[1px] top-[278px] w-[3px]">
        <div className="absolute inset-0 pointer-events-none shadow-[1px_0px_2px_0px_inset_rgba(255,255,255,0.5)]" />
      </div>
      <div className="absolute bg-[#333333] h-[100px] right-0 rounded-br-[1px] rounded-tr-[1px] top-[220px] w-[3px]">
        <div className="absolute inset-0 pointer-events-none shadow-[-1px_0px_2px_0px_inset_rgba(255,255,255,0.5)]" />
      </div>
      
      {/* App Content */}
      <div className="absolute bg-[#eef7fe] inset-[22px_25px] overflow-hidden rounded-[40px]">
        <div className="absolute content-stretch flex flex-col gap-[50px] h-[812px] items-center justify-start left-[21px] top-0 w-[338px] overflow-y-auto px-2">
          {/* Header */}
          <div className="bg-emerald-600 box-border content-stretch flex flex-col gap-2.5 h-[132px] items-center justify-center px-6 py-0 relative rounded-bl-[20px] rounded-br-[20px] shrink-0 w-full">
            <div className="content-stretch flex gap-2.5 items-start justify-center relative shrink-0">
              <div className="relative shrink-0 size-6">
                <LandPlot className="w-full h-full text-white" />
              </div>
              <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[22px] text-nowrap text-white tracking-[-0.33px]">
                <p className="leading-[28px] whitespace-pre">Golf Trip Dashboard</p>
              </div>
            </div>
            <div className="font-['Inter:Light',_sans-serif] font-light leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.21px]">
              <p className="leading-[normal]">Historical results and statistics from our annual golf trips</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-start p-[16px] relative rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
            <div className="relative shrink-0 size-6">
              <Search className="w-full h-full text-gray-500" />
            </div>
            <div className="font-['Inter:Light',_sans-serif] font-light leading-[0] not-italic relative shrink-0 text-[#707682] text-[14px] text-center text-nowrap tracking-[-0.21px]">
              <p className="leading-[normal] whitespace-pre">Search trips, players, or courses...</p>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
            {/* Total Players Card */}
            <div className="bg-white box-border content-stretch flex gap-4 items-center justify-start p-[24px] relative rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
              <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[12px] relative rounded-[10px] shrink-0 size-[60px]">
                <div className="relative shrink-0 size-7">
                  <Users className="w-full h-full text-emerald-600" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap">
                <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[32px] text-emerald-600 tracking-[-0.48px]">
                  <p className="leading-[normal] text-nowrap whitespace-pre">38</p>
                </div>
                <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#73767d] text-[16px] tracking-[-0.24px]">
                  <p className="leading-[normal] text-nowrap whitespace-pre">Total Players</p>
                </div>
              </div>
            </div>
            
            {/* Best Average Card */}
            <div className="bg-white box-border content-stretch flex gap-4 items-center justify-start p-[24px] relative rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
              <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[12px] relative rounded-[10px] shrink-0 size-[60px]">
                <div className="relative shrink-0 size-7">
                  <Trophy className="w-full h-full text-emerald-600" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap">
                <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[32px] text-emerald-600 tracking-[-0.48px]">
                  <p className="leading-[normal] text-nowrap whitespace-pre">83.2</p>
                </div>
                <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#73767d] text-[16px] tracking-[-0.24px]">
                  <p className="leading-[normal] text-nowrap whitespace-pre">Best Average</p>
                </div>
              </div>
            </div>
            
            {/* Best Single Score Card */}
            <div className="bg-white box-border content-stretch flex gap-4 items-center justify-start p-[24px] relative rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
              <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[12px] relative rounded-[10px] shrink-0 size-[60px]">
                <div className="relative shrink-0 size-7">
                  <Star className="w-full h-full text-emerald-600" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap">
                <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[32px] text-emerald-600 tracking-[-0.48px]">
                  <p className="leading-[normal] text-nowrap whitespace-pre">76</p>
                </div>
                <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#73767d] text-[16px] tracking-[-0.24px]">
                  <p className="leading-[normal] text-nowrap whitespace-pre">Best Single Score</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Trips Section */}
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] tracking-[-0.27px]">
              <p className="leading-[normal]">Recent Trips</p>
            </div>
            
            {/* Trip Card 1 */}
            <div className="bg-white box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
              <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px] bg-emerald-100">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="content-stretch flex flex-col gap-1 items-start justify-center leading-[0] not-italic relative shrink-0">
                  <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.24px]">
                    <p className="leading-[normal]">Pebble Beach 2024</p>
                  </div>
                  <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[#73767d] text-[14px] tracking-[-0.21px]">
                    <p className="leading-[normal]">March 15-17, 2024</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                <MapPin className="w-4 h-4 text-[#73767d]" />
                <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[#73767d] text-[14px] tracking-[-0.21px]">
                  <p className="leading-[normal]">Pebble Beach, CA</p>
                </div>
              </div>
            </div>

            {/* Trip Card 2 */}
            <div className="bg-white box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
              <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px] bg-emerald-100">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="content-stretch flex flex-col gap-1 items-start justify-center leading-[0] not-italic relative shrink-0">
                  <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.24px]">
                    <p className="leading-[normal]">Augusta National 2023</p>
                  </div>
                  <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[#73767d] text-[14px] tracking-[-0.21px]">
                    <p className="leading-[normal]">October 8-10, 2023</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                <MapPin className="w-4 h-4 text-[#73767d]" />
                <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[#73767d] text-[14px] tracking-[-0.21px]">
                  <p className="leading-[normal]">Augusta, GA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] tracking-[-0.27px]">
              <p className="leading-[normal]">Current Leaderboard</p>
            </div>
            
            <div className="bg-white box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
              {/* Player 1 */}
              <div className="content-stretch flex gap-3 items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="bg-emerald-600 box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]">
                    <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-white text-[16px] tracking-[-0.24px]">
                      <p className="leading-[normal]">1</p>
                    </div>
                  </div>
                  <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.24px]">
                    <p className="leading-[normal]">Alex Johnson</p>
                  </div>
                </div>
                <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-emerald-600 text-[16px] tracking-[-0.24px]">
                  <p className="leading-[normal]">83.2</p>
                </div>
              </div>

              {/* Player 2 */}
              <div className="content-stretch flex gap-3 items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="bg-gray-300 box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]">
                    <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-white text-[16px] tracking-[-0.24px]">
                      <p className="leading-[normal]">2</p>
                    </div>
                  </div>
                  <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.24px]">
                    <p className="leading-[normal]">Mike Chen</p>
                  </div>
                </div>
                <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-emerald-600 text-[16px] tracking-[-0.24px]">
                  <p className="leading-[normal]">85.7</p>
                </div>
              </div>

              {/* Player 3 */}
              <div className="content-stretch flex gap-3 items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="bg-amber-600 box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]">
                    <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-white text-[16px] tracking-[-0.24px]">
                      <p className="leading-[normal]">3</p>
                    </div>
                  </div>
                  <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.24px]">
                    <p className="leading-[normal]">Sarah Williams</p>
                  </div>
                </div>
                <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-emerald-600 text-[16px] tracking-[-0.24px]">
                  <p className="leading-[normal]">87.1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full pb-8">
            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] tracking-[-0.27px]">
              <p className="leading-[normal]">Upcoming Events</p>
            </div>
            
            <div className="bg-white box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
              <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px] bg-blue-100">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div className="content-stretch flex flex-col gap-1 items-start justify-center leading-[0] not-italic relative shrink-0">
                  <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.24px]">
                    <p className="leading-[normal]">Spring Championship</p>
                  </div>
                  <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[#73767d] text-[14px] tracking-[-0.21px]">
                    <p className="leading-[normal]">May 20-22, 2024</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                <MapPin className="w-4 h-4 text-[#73767d]" />
                <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[#73767d] text-[14px] tracking-[-0.21px]">
                  <p className="leading-[normal]">St. Andrews, Scotland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



