import 'package:flutter/material.dart' hide PageController;
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';
import 'package:url_strategy/url_strategy.dart';

import './config/constants.dart';
import './config/theme.dart';
import './tools/extensions.dart';
import 'pages/export.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  Intl.defaultLocale = LOCALE.code();
  await initializeDateFormatting(Intl.defaultLocale);

  setPathUrlStrategy();
  runApp(const Website());
}

class Website extends StatelessWidget {
  const Website({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Yug Thapar",
      theme: WebsiteTheme.of(context),
      builder: (context, widget) {
        theme = WebsiteTheme.of(context);

        return widget!;
      },
      home: const BasePage(),
    );
  }
}
