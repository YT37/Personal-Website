import 'dart:math';

import 'package:flutter/material.dart';
import 'package:get/get.dart';

import './info_dialog.dart';

class InfoCard extends StatelessWidget {
  final Map<String, dynamic> data;

  const InfoCard({
    super.key,
    required this.data,
  });

  @override
  Widget build(BuildContext context) {
    final bool _alignment = Random().nextInt(10) % 2 == 0;
    final double _stop = Random().nextDouble() * (1 - 0.7) + 0.7;

    return GestureDetector(
      onTap: () {
        showDialog(
          context: context,
          builder: (_) => InfoDialog(data: data),
        );
      },
      child: Container(
        width: 250,
        margin: const EdgeInsets.only(bottom: 25, right: 10),
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          // color: cardColor,
          gradient: LinearGradient(
            colors: [
              context.theme.colorScheme.secondary,
              context.theme.colorScheme.tertiary,
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
              style: context.textTheme.titleLarge!
                  .copyWith(color: context.theme.colorScheme.onSecondary),
            ),
            Flexible(
              child: Text(
                data["description"],
                overflow: TextOverflow.clip,
                style: context.textTheme.titleMedium!.copyWith(
                  color: context.theme.colorScheme.onSecondary,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ),
            const Divider(),
            Center(
              child: Text(
                "Click to Learn More",
                style: context.textTheme.titleMedium!
                    .copyWith(color: context.theme.colorScheme.onSecondary),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
