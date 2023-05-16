export interface IDragon {
  heat_shield:         HeatShield;
  launch_payload_mass: PayloadMass;
  launch_payload_vol:  LaunchPayloadVol;
  return_payload_mass: PayloadMass;
  return_payload_vol:  LaunchPayloadVol;
  pressurized_capsule: PressurizedCapsule;
  trunk:               Trunk;
  height_w_trunk:      Diameter;
  diameter:            Diameter;
  first_flight:        Date;
  flickr_images:       string[];
  name:                string;
  type:                string;
  active:              boolean;
  crew_capacity:       number;
  sidewall_angle_deg:  number;
  orbit_duration_yr:   number;
  dry_mass_kg:         number;
  dry_mass_lb:         number;
  thrusters:           Thruster[];
  wikipedia:           string;
  description:         string;
  id:                  string;
}

export interface Diameter {
  meters: number;
  feet:   number;
}

export interface HeatShield {
  material:     string;
  size_meters:  number;
  temp_degrees: number;
  dev_partner:  string;
}

export interface PayloadMass {
  kg: number;
  lb: number;
}

export interface LaunchPayloadVol {
  cubic_meters: number;
  cubic_feet:   number;
}

export interface PressurizedCapsule {
  payload_volume: LaunchPayloadVol;
}

export interface Thruster {
  type:   string;
  amount: number;
  pods:   number;
  fuel_1: string;
  fuel_2: string;
  isp:    number;
  thrust: Thrust;
}

export interface Thrust {
  kN:  number;
  lbf: number;
}

export interface Trunk {
  trunk_volume: LaunchPayloadVol;
  cargo:        Cargo;
}

export interface Cargo {
  solar_array:         number;
  unpressurized_cargo: boolean;
}
