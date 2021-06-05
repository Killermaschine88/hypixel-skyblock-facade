import { Pets, SkyBlockDungeonGroupResponse, SkyBlockSkillGroupResponse, SkyBlockSlayerGroupResponse } from './SkyBlockProfileStats'

export default interface SkyBlockProfilePlayerStats {
  id: string
  name: string
  username: string
  last_save_at: {
    time: number
    date: Date
  }
  weight: number
  weight_overflow: number
  skills: SkyBlockSkillGroupResponse | null
  slayers: SkyBlockSlayerGroupResponse | null
  dungeons: SkyBlockDungeonGroupResponse | null
  pets: Pets[] | null
  coins: {
    total: number
    bank?: number | null
    purse?: number | null
  }
}
