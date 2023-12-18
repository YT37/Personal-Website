import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../pages/export.dart';

late ThemeData theme;
const Locale LOCALE = Locale("en", "IN");

const Map<int, List<dynamic>> pages = {
  0: ["Home", HomePage(), Icons.home],
  1: ["About", AboutPage(), Icons.person],
  2: ["Projects", ProjectsPage(), Icons.construction],
  3: ["Work", WorkPage(), Icons.work],
  4: ["Awards", AwardsPage(), Icons.emoji_events],
};

const List<List<dynamic>> socials = [
  [
    FontAwesomeIcons.linkedin,
    "https://www.linkedin.com/in/yt37/",
  ],
  [
    FontAwesomeIcons.github,
    "https://github.com/YT37",
  ],
  [
    FontAwesomeIcons.instagram,
    "https://instagram.com/yugt37",
  ],
  [
    FontAwesomeIcons.youtube,
    "https://youtube.com/@yugthapar37",
  ],
  [
    FontAwesomeIcons.squareXTwitter,
    "https://twitter.com/yugt37",
  ],
];

const List<List<dynamic>> details = [
  ["+91 XXXXX-XXXXX", Icons.call],
  ["contact@yugthapar.com", Icons.mail],
  ["Earth", Icons.location_on],
];
