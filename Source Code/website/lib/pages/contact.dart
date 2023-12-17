import 'package:flutter/material.dart';

import '../config/constants.dart';

class ContactPage extends StatelessWidget {
  const ContactPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "Contact",
        style: theme.textTheme.titleLarge,
      ),
    );
  }
}
