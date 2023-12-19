import 'package:flutter/material.dart';

import '../config/constants.dart';
import '../config/data.dart';
import '../widgets/info_card.dart';

class AwardsPage extends StatelessWidget {
  const AwardsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 500,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 25),
              child: Text(
                "Awards",
                style: theme.textTheme.displayMedium!
                    .copyWith(fontWeight: FontWeight.bold),
              ),
            ),
            Flexible(
              child: Scrollbar(
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  children: List.generate(
                    AWARDS.length,
                    (index) => InfoCard(
                      cardColor: theme.colorScheme.secondary,
                      textColor: theme.colorScheme.onSecondary,
                      data: AWARDS[index],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
