import 'package:flutter/material.dart' hide PageController;
import 'package:url_strategy/url_strategy.dart';

import '/config/theme.dart';
import '/ui/pages/export.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  setPathUrlStrategy();
  runApp(const PersonalWebsite());
}

class PersonalWebsite extends StatelessWidget {
  const PersonalWebsite({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Yug Thapar",
      theme: WebsiteTheme.of(context),
      home: const BasePage(),
    );
  }
}
