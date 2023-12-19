import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../pages/export.dart';

late ThemeData theme;
const Locale LOCALE = Locale("en", "IN");

const String resume =
    "https://drive.google.com/file/d/1BnmhETnMrvhIK-Y9Wi1n6O7MswfiDp48/view?usp=sharing";

const List<List<dynamic>> pages = [
  ["Home", HomePage(), Icons.home],
  ["About", AboutPage(), Icons.person],
  ["Projects", ProjectsPage(), Icons.construction],
  ["Work", WorkPage(), Icons.work],
  ["Awards", AwardsPage(), Icons.emoji_events],
];

const List<List<dynamic>> socials = [
  [FontAwesomeIcons.linkedin, "https://www.linkedin.com/in/yt37/"],
  [FontAwesomeIcons.github, "https://github.com/YT37"],
  [FontAwesomeIcons.instagram, "https://instagram.com/yugt37"],
  [FontAwesomeIcons.youtube, "https://youtube.com/@yugthapar37"],
  [FontAwesomeIcons.squareXTwitter, "https://twitter.com/yugt37"],
];

const List<List<dynamic>> details = [
  ["+91 XXXXX-XXXXX", Icons.call],
  ["contact@yugthapar.com", Icons.mail],
  ["India", Icons.location_on],
];
