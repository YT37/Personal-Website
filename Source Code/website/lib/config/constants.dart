import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '/ui/pages/export.dart';

const List<Map<String, dynamic>> pages = [
  {
    "name": "Home",
    "page": HomePage(),
    "icon": Icons.home,
  },
  {
    "name": "About",
    "page": AboutPage(),
    "icon": Icons.person,
  },
  {
    "name": "Projects",
    "page": ProjectsPage(),
    "icon": Icons.construction,
  },
  {
    "name": "Work",
    "page": WorkPage(),
    "icon": Icons.work,
  },
  {
    "name": "Awards",
    "page": AwardsPage(),
    "icon": Icons.emoji_events,
  },
];

const List<Map<String, dynamic>> socials = [
  {
    "icon": FontAwesomeIcons.linkedin,
    "link": "https://www.linkedin.com/in/yt37/",
  },
  {
    "icon": FontAwesomeIcons.github,
    "link": "https://github.com/YT37",
  },
  {
    "icon": FontAwesomeIcons.instagram,
    "link": "https://instagram.com/yugt37",
  },
  {
    "icon": FontAwesomeIcons.youtube,
    "link": "https://youtube.com/@yugthapar37",
  },
  {
    "icon": FontAwesomeIcons.squareXTwitter,
    "link": "https://twitter.com/yugt37",
  },
];

const List<Map<String, dynamic>> details = [
  {
    "detail": "+91 XXXXX-XXXXX",
    "icon": Icons.call,
  },
  {
    "detail": "contact@yugthapar.com",
    "icon": Icons.mail,
  },
  {
    "detail": "India",
    "icon": Icons.location_on,
  },
];
