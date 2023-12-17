import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../pages/export.dart';

late ThemeData theme;

// TODO: Change & Move
const bool TESTING = kDebugMode;

const Locale LOCALE = Locale("en", "IN");

const Map<int, List<dynamic>> pages = {
  0: ["Home", HomePage()],
  1: ["About", AboutPage()],
  2: ["Projects", ProjectsPage()],
  3: ["Work", WorkPage()],
  4: ["Contact", ContactPage()],
};

const List<List<dynamic>> socials = [
  [
    FontAwesomeIcons.github,
    Color(0xff000333),
    "https://github.com/YT37",
  ],
  [
    FontAwesomeIcons.instagram,
    Color(0xff424242),
    "https://instagram.com/yugt37",
  ],
  [
    FontAwesomeIcons.youtube,
    Color(0xffff0000),
    "https://youtube.com/@yugthapar37",
  ],
  [
    FontAwesomeIcons.squareXTwitter,
    Color(0xff000000),
    "https://twitter.com/yugt37",
  ],
];
