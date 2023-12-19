import 'dart:math';

import 'package:flutter/material.dart';

import '../config/constants.dart';

class InfoCard extends StatelessWidget {
  final Color cardColor;
  final Color textColor;
  final Map<String, dynamic> data;

  const InfoCard({
    super.key,
    required this.cardColor,
    required this.textColor,
    required this.data,
  });

  @override
  Widget build(BuildContext context) {
    final bool _alignment = Random().nextInt(10) % 2 == 0;
    final double _stop = Random().nextDouble() * (1 - 0.7) + 0.7;

    return GestureDetector(
      onTap: () {
        // TODO: Dialog
      },
      child: Container(
        width: 250,
        margin: const EdgeInsets.only(bottom: 25, right: 10),
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          // color: cardColor,
          gradient: LinearGradient(
            colors: [
              theme.colorScheme.secondary,
              theme.colorScheme.tertiary,
            ],
            stops: [0.1, _stop],
            begin: _alignment ? Alignment.bottomLeft : Alignment.topLeft,
            end: _alignment ? Alignment.topRight : Alignment.bottomRight,
          ),

          borderRadius: const BorderRadius.all(Radius.circular(10)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // TODO: All Image Error
            ClipRRect(
              borderRadius: const BorderRadius.all(Radius.circular(10)),
              child: Image.asset(
                data["image"],
                height: 250,
                width: 250,
                fit: BoxFit.fitWidth,
              ),
            ),
            const SizedBox(height: 10),
            Text(
              data["title"],
              style: theme.textTheme.titleLarge!
                  .copyWith(color: theme.colorScheme.onSecondary),
            ),
            Flexible(
              child: Text(
                data["description"],
                overflow: TextOverflow.fade,
                style: theme.textTheme.titleMedium!.copyWith(
                  color: theme.colorScheme.onSecondary,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ),
            Center(
              child: Text(
                "Click to Learn More",
                style: theme.textTheme.titleMedium!
                    .copyWith(color: theme.colorScheme.onSecondary),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
