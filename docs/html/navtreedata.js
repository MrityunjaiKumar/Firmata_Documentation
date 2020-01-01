/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Firmata library reference", "index.html", [
    [ "Firmata", "index.html", [
      [ "Contents", "index.html#autotoc_md1", [
        [ "Usage", "index.html#autotoc_md2", null ],
        [ "Firmata Client Libraries", "index.html#autotoc_md3", null ],
        [ "Updating Firmata in the Arduino IDE - Arduino 1.6.4 and higher", "index.html#autotoc_md4", [
          [ "Cloning Firmata", "index.html#autotoc_md5", null ]
        ] ],
        [ "Updating Firmata in the Arduino IDE - older versions (<= 1.6.3 or 1.0.x)", "index.html#autotoc_md6", [
          [ "Mac OSX:", "index.html#autotoc_md7", null ],
          [ "Windows:", "index.html#autotoc_md8", null ],
          [ "Linux:", "index.html#autotoc_md9", null ],
          [ "Using the Source code rather than release archive (only for versions older than Arduino 1.6.3)", "index.html#autotoc_md10", null ]
        ] ],
        [ "Contributing", "index.html#autotoc_md11", null ]
      ] ]
    ] ],
    [ "AccelStepperFirmata (Stepper 2.0)", "md_protocol_accel_stepper_firmata.html", [
      [ "Protocol", "md_protocol_accel_stepper_firmata.html#autotoc_md13", null ],
      [ "AccelStepperFirmata's Custom Float Format", "md_protocol_accel_stepper_firmata.html#autotoc_md14", null ]
    ] ],
    [ "encoder", "md_protocol_encoder.html", null ],
    [ "Firmata sysex feature registry", "md_protocol_feature-registry.html", [
      [ "Proposing a new feature", "md_protocol_feature-registry.html#autotoc_md25", null ],
      [ "Core feature set", "md_protocol_feature-registry.html#autotoc_md26", null ],
      [ "Optional feature set", "md_protocol_feature-registry.html#autotoc_md27", null ]
    ] ],
    [ "I2C", "md_protocol_i2c.html", null ],
    [ "OneWire", "md_protocol_onewire.html", null ],
    [ "Digital Pin Groups (Proposal)", "md_protocol_proposals_pingroups-proposal.html", [
      [ "Requirements", "md_protocol_proposals_pingroups-proposal.html#autotoc_md37", null ],
      [ "Protocol", "md_protocol_proposals_pingroups-proposal.html#autotoc_md38", [
        [ "Compatible client librairies", "md_protocol_encoder.html#autotoc_md15", null ],
        [ "Tested boards", "md_protocol_encoder.html#autotoc_md16", null ],
        [ "Protocol details", "md_protocol_encoder.html#autotoc_md17", [
          [ "Attach encoder query", "md_protocol_encoder.html#autotoc_md18", null ],
          [ "Report encoder's position", "md_protocol_encoder.html#autotoc_md19", null ],
          [ "Report all encoders positions", "md_protocol_encoder.html#autotoc_md20", null ],
          [ "Reset encoder position to zero", "md_protocol_encoder.html#autotoc_md21", null ],
          [ "Enable/disable reporting", "md_protocol_encoder.html#autotoc_md22", null ],
          [ "Detach encoder", "md_protocol_encoder.html#autotoc_md23", null ]
        ] ],
        [ "I2C read/write request", "md_protocol_i2c.html#autotoc_md29", null ],
        [ "I2C reply", "md_protocol_i2c.html#autotoc_md30", null ],
        [ "I2C config", "md_protocol_i2c.html#autotoc_md31", null ],
        [ "Example files:", "md_protocol_onewire.html#autotoc_md32", null ],
        [ "Compatible host implementations", "md_protocol_onewire.html#autotoc_md33", null ],
        [ "Compatible client librairies", "md_protocol_onewire.html#autotoc_md34", null ],
        [ "Protocol details", "md_protocol_onewire.html#autotoc_md35", null ],
        [ "Digital Pin Group commands", "md_protocol_proposals_pingroups-proposal.html#autotoc_md39", null ],
        [ "Configuration", "md_protocol_proposals_pingroups-proposal.html#autotoc_md40", null ],
        [ "Clear", "md_protocol_proposals_pingroups-proposal.html#autotoc_md41", null ],
        [ "State set", "md_protocol_proposals_pingroups-proposal.html#autotoc_md42", null ],
        [ "State request and reply", "md_protocol_proposals_pingroups-proposal.html#autotoc_md43", null ]
      ] ]
    ] ],
    [ "RCSwitchFirmata Feature", "md_protocol_proposals_rcswitch-proposal.html", [
      [ "Protocol details", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md45", [
        [ "Tristate bits", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md46", null ],
        [ "Send", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md47", [
          [ "Attach sender", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md48", null ],
          [ "Detach sender", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md49", null ],
          [ "Configuration of rcswitch parameter <tt>protocol</tt>", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md50", null ],
          [ "Configuration of rcswitch parameter <tt>pulse length</tt>", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md51", null ],
          [ "Configuration of rcswitch parameter <tt>repeat transmit</tt>", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md52", null ],
          [ "Send tristate code as char array", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md53", null ],
          [ "Send long code", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md54", null ],
          [ "Send char array", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md55", null ],
          [ "Send tristate code as packed tristate bits", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md56", null ]
        ] ],
        [ "Receive", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md57", [
          [ "Attach receiver", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md58", null ],
          [ "Detach receiver", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md59", null ],
          [ "Configuration of rcswitch parameter <tt>receive tolerance</tt> (in percent)", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md60", null ],
          [ "Configuration parameter <tt>enable raw data</tt>", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md61", null ],
          [ "Receive a RF message", "md_protocol_proposals_rcswitch-proposal.html#autotoc_md62", null ]
        ] ]
      ] ]
    ] ],
    [ "serial-2", "md_protocol_proposals_serial-2_80-proposal.html", null ],
    [ "shift in/out proposal", "md_protocol_proposals_shift-proposal.html", [
      [ "Propoasl A: shift in/out with no config or latch support", "md_protocol_proposals_shift-proposal.html#autotoc_md77", null ],
      [ "Proposal B: shift in/out with config and latch support", "md_protocol_proposals_shift-proposal.html#autotoc_md78", null ]
    ] ],
    [ "SPI (Proposal)", "md_protocol_proposals_spi-proposal.html", null ],
    [ "tone proposal", "md_protocol_proposals_tone-proposal.html", null ],
    [ "protocol", "md_protocol_protocol.html", [
      [ "Message Types", "md_protocol_protocol.html#autotoc_md93", null ],
      [ "Data Message Expansion", "md_protocol_protocol.html#autotoc_md94", null ],
      [ "Control Messages Expansion", "md_protocol_protocol.html#autotoc_md95", null ],
      [ "Sysex Message Format", "md_protocol_protocol.html#autotoc_md96", [
        [ "Constants", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md63", [
          [ "Port IDs", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md64", null ],
          [ "Serial pin capability response", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md65", null ],
          [ "Serial pin mode", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md66", null ]
        ] ],
        [ "Commands", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md67", [
          [ "Serial Config", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md68", null ],
          [ "Serial Write", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md69", null ],
          [ "Serial Read", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md70", null ],
          [ "Serial Reply", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md71", null ],
          [ "Serial Close", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md72", null ],
          [ "Serial Flush", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md73", null ],
          [ "Serial Listen", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md74", null ],
          [ "Serial Update Baud", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md75", null ],
          [ "Serial Max Char Delay", "md_protocol_proposals_serial-2_80-proposal.html#autotoc_md76", null ]
        ] ],
        [ "Overview", "md_protocol_proposals_spi-proposal.html#autotoc_md79", null ],
        [ "SPI_BEGIN", "md_protocol_proposals_spi-proposal.html#autotoc_md80", null ],
        [ "SPI_DEVICE_CONFIG", "md_protocol_proposals_spi-proposal.html#autotoc_md81", [
          [ "deviceId", "md_protocol_proposals_spi-proposal.html#autotoc_md82", null ],
          [ "bitOrder", "md_protocol_proposals_spi-proposal.html#autotoc_md83", null ],
          [ "dataMode", "md_protocol_proposals_spi-proposal.html#autotoc_md84", null ],
          [ "maxSpeed", "md_protocol_proposals_spi-proposal.html#autotoc_md85", null ],
          [ "wordSize", "md_protocol_proposals_spi-proposal.html#autotoc_md86", null ],
          [ "csPinOptions / csPin", "md_protocol_proposals_spi-proposal.html#autotoc_md87", null ]
        ] ],
        [ "SPI_TRANSFER", "md_protocol_proposals_spi-proposal.html#autotoc_md88", null ],
        [ "SPI_WRITE", "md_protocol_proposals_spi-proposal.html#autotoc_md89", null ],
        [ "SPI_READ", "md_protocol_proposals_spi-proposal.html#autotoc_md90", null ],
        [ "SPI_REPLY", "md_protocol_proposals_spi-proposal.html#autotoc_md91", null ],
        [ "SPI_END", "md_protocol_proposals_spi-proposal.html#autotoc_md92", null ],
        [ "Query Firmware Name and Version", "md_protocol_protocol.html#autotoc_md97", null ],
        [ "Extended Analog", "md_protocol_protocol.html#autotoc_md98", null ],
        [ "Capability Query", "md_protocol_protocol.html#autotoc_md99", [
          [ "Capabilities query", "md_protocol_protocol.html#autotoc_md100", null ],
          [ "Capabilities response", "md_protocol_protocol.html#autotoc_md101", [
            [ "Supported Modes", "md_protocol_protocol.html#autotoc_md102", null ],
            [ "Mode Resolution", "md_protocol_protocol.html#autotoc_md103", null ]
          ] ]
        ] ],
        [ "Analog Mapping Query", "md_protocol_protocol.html#autotoc_md104", null ],
        [ "Pin State Query", "md_protocol_protocol.html#autotoc_md105", null ],
        [ "String", "md_protocol_protocol.html#autotoc_md106", null ],
        [ "Sampling Interval", "md_protocol_protocol.html#autotoc_md107", null ]
      ] ]
    ] ],
    [ "Firmata Protocol Documentation", "md_protocol__r_e_a_d_m_e.html", [
      [ "Firmata client libraries", "md_protocol__r_e_a_d_m_e.html#autotoc_md109", null ],
      [ "Contributing", "md_protocol__r_e_a_d_m_e.html#autotoc_md110", null ]
    ] ],
    [ "Version 2.6.0 - September 16th, 2017", "md_protocol_revisions.html", [
      [ "Version 2.5.1 - December 21st, 2015", "md_protocol_revisions.html#autotoc_md112", null ],
      [ "Version 2.5.0 - November 7th, 2015", "md_protocol_revisions.html#autotoc_md113", null ],
      [ "Version 2.4.0 - December 2014", "md_protocol_revisions.html#autotoc_md114", null ],
      [ "Version 2.3.0 - February 2013", "md_protocol_revisions.html#autotoc_md115", null ],
      [ "Version 2.2.0 - January 2011", "md_protocol_revisions.html#autotoc_md116", null ],
      [ "Version 2.1.0 - March 2010", "md_protocol_revisions.html#autotoc_md117", null ],
      [ "Version 2.0.0 - September 2008", "md_protocol_revisions.html#autotoc_md118", null ],
      [ "Version 1.0.0", "md_protocol_revisions.html#autotoc_md119", null ]
    ] ],
    [ "Scheduler", "md_protocol_scheduler.html", null ],
    [ "serial-1", "md_protocol_serial-1_80.html", null ],
    [ "Servo", "md_protocol_servos.html", null ],
    [ "Stepper Motor", "md_protocol_stepper-legacy.html", [
      [ "Protocol", "md_protocol_stepper-legacy.html#autotoc_md136", null ]
    ] ],
    [ "Firmata_Documentation", "md__r_e_a_d_m_e.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ]
      ] ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_b_l_e_stream_8cpp.html",
"class_bluefruit_l_e___s_p_i___stream.html",
"md_protocol_proposals_rcswitch-proposal.html#autotoc_md46"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';